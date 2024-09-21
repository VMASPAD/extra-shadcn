export const codeNavBar = `"use client"
import React, { useState, useEffect } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const navBarVariants = cva(
  "flex items-center p-5 text-secondary rounded-lg transition-all duration-700 ease-in-out fixed backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "bg-primary",
        destructive: "bg-destructive",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/60",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
      position: {
        top: "top-[3%] left-1/2 transform -translate-x-1/2",
        bottom: "bottom-[3%] left-1/2 transform -translate-x-1/2",
        left: "left-[3%] top-1/2 transform -translate-y-1/2",
        right: "right-[3%] top-1/2 transform -translate-y-1/2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      position: "bottom",
    },
  }
);

interface NavBarProps extends VariantProps<typeof navBarVariants> {
  distance?: number;
  className?: string;
  children: React.ReactNode;
}

const NavBar = ({ children, distance = 70, position = "bottom", className, variant, size }: NavBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const threshold = distance;

      switch (position) {
        case "top":
          setIsVisible(clientY <= threshold);
          break;
        case "bottom":
          setIsVisible(innerHeight - clientY <= threshold);
          break;
        case "left":
          setIsVisible(clientX <= threshold);
          break;
        case "right":
          setIsVisible(innerWidth - clientX <= threshold);
          break;
        default:
          setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [distance, position]);

  const getTransformClass = () => {
    switch (position) {
      case "top":
        return isVisible || isMouseInside ? 'translate-y-0' : '-translate-y-full';
      case "bottom":
        return isVisible || isMouseInside ? 'translate-y-0' : 'translate-y-full';
      case "left":
        return isVisible || isMouseInside ? 'translate-x-0' : '-translate-x-full';
      case "right":
        return isVisible || isMouseInside ? 'translate-x-0' : 'translate-x-full';
      default:
        return '';
    }
  };

  return (
    <div
      className={cn(
        navBarVariants({ variant, size, position, className }),
        'z-10',
        isVisible || isMouseInside ? 'opacity-100' : 'opacity-0',
        getTransformClass(),
        'transition-all duration-700 ease-in-out'
      )}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
    >
      {children}
    </div>
  );
};

export default NavBar;

`
export const codeCodeBadge = `"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react"; // Asegúrate de importar los iconos correctos

interface CodeBadgeProps {
  children: React.ReactNode;
  iconCopy?: boolean;
}

function CodeBadge({ children, iconCopy }: CodeBadgeProps) {
  const [buttonCopy, setButtonCopy] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setButtonCopy(true);
      setTimeout(() => setButtonCopy(false), 2000);
    });
  };

  const handleClick = () => {
    copyToClipboard(children.toString());
  };

  if (iconCopy === true) {
    return (
      <>
        <div className="relative border-primary border-[1px] rounded-lg p-2">
          <pre>
            <code>{children}</code>
          </pre>
          <Badge
            onClick={handleClick}
            className="bg-primary absolute top-0 right-0 mt-[1%] mr-[1%] cursor-pointer"
          >
            {buttonCopy ? <Check className="w-4" /> : <Copy className="w-4" />}
          </Badge>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="relative border-primary border-[1px] rounded-lg p-2">
          <pre>
            <code>{children}</code>
          </pre>
        </div>
      </>
    );
  }
}

export default CodeBadge;
`
export const codeCanvasBadge = `"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface VideoBadgeProps {
  link: string;
  modal?: boolean;
}

function VideoBadge({ link, modal = false }: VideoBadgeProps) {
  return (
    <>
      {modal ? (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Open</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-full h-auto max-w-6xl">
            <AlertDialogHeader>
              <AlertDialogDescription className="w-full h-full">
                <iframe
                  className="w-full h-[80vh]"
                  src={\`https://www.youtube.com/embed/\${link}\`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Exit</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <iframe
          width="560"
          height="315"
          src={\`https://www.youtube.com/embed/\${link}\`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
}

export default VideoBadge;

`