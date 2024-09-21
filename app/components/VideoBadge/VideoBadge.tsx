"use client";
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
                  src={`https://www.youtube.com/embed/${link}`}
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
          src={`https://www.youtube.com/embed/${link}`}
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
