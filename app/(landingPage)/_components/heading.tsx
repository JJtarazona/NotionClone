"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        Tus Ideas, documentos y planes, unificados en un solo lugar, bienvenods
        a <span className="underline">CloneNotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        CloneNotion el espacio de trabajo para <br />
        tus ideas, documentos y planes
      </h3>
      <Button>
        Ingresa a CloneNotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
