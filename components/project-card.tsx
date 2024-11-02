import React from "react";
import { Badge, badgeVariants } from "./ui/badge";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { VariantProps } from "class-variance-authority";

type TechStackItem = {
  text: string;
  varient: VariantProps<typeof badgeVariants>["variant"];
};

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: TechStackItem[];
  github?: string;
  live?: string;
  imageUrl: string;
};

const ProjectCard = ({
  description,
  techStack,
  title,
  github,
  live,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden font-space flex flex-col justify-between gap-3">
      <div>
        <div className="aspect-video overflow-hidden object-contain">
          <img src={imageUrl} alt="" />
        </div>
        <div className="px-2">
          <p className="font-bold text-lg">{title}</p>
          <p className="text-xs text-foreground/50">{description}</p>
        </div>
      </div>
      <div className="px-2 pb-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1">
            {techStack.map((item, idx) => {
              return (
                <Badge key={idx} variant={item.varient} className="">
                  {item.text}
                </Badge>
              );
            })}
          </div>
          <div className="space-x-2">
            {github && (
              <Link
                className={buttonVariants({
                  variant: "default",
                  className: "h-6",
                })}
                href={github}
                target="_blank">
                github
              </Link>
            )}
            {
              <Link
                className={buttonVariants({
                  variant: "default",
                  className: "h-6",
                })}
                href={live!}
                target="_blank">
                live
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
