import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

export function CurrentProjectCard({ project }) {
  return (
    <Card className="flex flex-col rounded-lg border border-foreground bg-card text-center shadow-[1px_3px_5px_0px_#01091c] dark:border-border dark:shadow-sm">
      <CardHeader className="mx-auto flex">
        <Image
          src={project.image}
          alt={`Photo of the ${project.alt} project`}
          width={760}
          height={430}
          priority={false}
          className="rounded-t-md"
        />
      </CardHeader>
      <CardTitle className="text-blue-500 transition-all duration-150 ease-in-out hover:text-blue-400 hover:underline hover:underline-offset-4 focus:text-blue-600 md:text-lg xl:text-2xl 2xl:text-3xl dark:text-blue-400 dark:hover:text-blue-600 dark:focus:text-blue-500">
        <a
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} website`}
        >
          {project.title}
        </a>
      </CardTitle>
      <CardContent className="flex flex-grow">
        <p className="my-1 line-clamp-4 leading-tight tracking-tighter text-muted-foreground md:mb-0 lg:mb-1 lg:text-base lg:leading-snug xl:mt-3 xl:text-lg 2xl:text-2xl 2xl:leading-normal 2xl:tracking-normal">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-center gap-4 pb-4 lg:gap-6 2xl:gap-8 2xl:pb-6">
        <Button
          asChild
          variant="main"
          size="md"
          aria-label={`Link to the ${project.title} page`}
          className="hover:border-blue-400 hover:text-blue-400"
        >
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </Button>
        <Button
          asChild
          variant="main"
          size="md"
          aria-label={`Link to the ${project.title} GitHub repository`}
          className="hover:border-blue-400 hover:text-blue-400"
        >
          <a
            href={project.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
