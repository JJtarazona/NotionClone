"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Spinner } from "../../../components/spinner";
import { Button } from "../../../components/ui/button";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">Ingresa a CloneNotion</Link>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Únete Gratis
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
