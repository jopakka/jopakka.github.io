import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useMemo, useRef, useState } from "react";
import AppData from "../AppData";
import { BaseComponentProps } from "../model/BaseComponentProps";
import Project from "../model/Project";
import styles from "./views.module.scss";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../components/EmbelButtons";

export default function Projects(props: BaseComponentProps) {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | undefined>(
    undefined
  );
  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi);

  const carouselItems = useMemo(() => {
    return AppData.projects;
  }, []);

  const githubLink = useMemo(() => {
    return AppData.contacts.find((contact) => contact.id === "github")?.url;
  }, []);

  return (
    <section
      id="projects"
      className={`${styles.view} ${styles.projects}`}
      {...props}
    >
      <div className={styles.viewContainer}>
        <div className={styles.projectLabelWithControls}>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            style={{ visibility: prevBtnDisabled ? "hidden" : "visible" }}
          />
          <h1>Projects</h1>
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            style={{ visibility: nextBtnDisabled ? "hidden" : "visible" }}
          />
        </div>
        <ProjectCarousel
          projects={carouselItems}
          options={{ containScroll: false }}
          onEmblaApi={setEmblaApi}
        />
        <p>
          Here are just few of my projects. More you can find at my{" "}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}

interface ProjectsCarouselProps {
  projects: Project[];
  options?: EmblaOptionsType;
  onEmblaApi: (api: EmblaCarouselType | undefined) => void;
}

const ProjectCarousel = ({
  projects,
  options,
  onEmblaApi,
}: ProjectsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onEmblaApi(emblaApi);
  }, [onEmblaApi, emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container} ref={ref}>
        {projects.map((item, index) => (
          <div key={index} className={styles.embla__slide}>
            <ProjectItem
              item={item}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProjectItemProps {
  item: Project;
  onClick?: () => void;
}

const ProjectItem = ({ item, onClick }: ProjectItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const tags = useMemo(() => {
    if (item.tags == null || item.tags.length == 0) return null;
    return item.tags;
  }, [item.tags]);

  useEffect(() => {
    const tempRef = ref.current;
    if (tempRef == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(tempRef);
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0, // 50% of target visible
      }
    );

    observer.observe(tempRef);

    // Clean up the observer
    return () => {
      observer.unobserve(tempRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={styles.projectItem}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={onClick}
      role="button"
    >
      {isVisible && <img src={item.imageUrl} alt={item.imageAlt} />}
      <div className={styles.projectContent}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>

      {tags != null && (
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <TagChip label={tag} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

interface TapChipProps {
  label: string;
}

const TagChip = ({ label }: TapChipProps) => {
  return (
    <div className={styles.tagChip}>
      <p>{label}</p>
    </div>
  );
};
