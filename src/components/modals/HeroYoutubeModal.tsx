import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import YoutubeIframe from "../common/YoutubeIFrame";
import AnimatedBorderTrail from "../common/AnimatedBorderTrail";

export function HeroYoutubeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src="/images/hero.svg"
          alt="hero image"
          className="hover:cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="p-2 min-w-full md:min-w-[calc(100vw-800px)]">
        <AnimatedBorderTrail trailSize="lg">
          <YoutubeIframe
            videoId="AVAR04vHdnY"
            autoPlay
            title="Welcome to Attio"
          />
        </AnimatedBorderTrail>
      </DialogContent>
    </Dialog>
  );
}
