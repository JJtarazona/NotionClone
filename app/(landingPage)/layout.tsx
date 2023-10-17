import { Navbar } from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <Navbar />
      <div className="h-full pt-40">{children}N</div>
    </div>
  );
};

export default LandingPageLayout;
