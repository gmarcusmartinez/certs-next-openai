import { FeedWrapper } from "@/components/feed-wrapper/FeedWrapper";
import { LearnHeader } from "@/components/learn-header/LearnHeader";
import { StickyWrapper } from "@/components/sticky-wrapper/StickyWrapper";
import { UserProgress } from "@/components/user-progress/UserProgress";
import React from "react";

export default function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            title: "Spanish",
            imageSrc: "/es.svg",
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <LearnHeader title="Spanish" />
      </FeedWrapper>
    </div>
  );
}
