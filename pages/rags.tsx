import { FULL_NAME, PROFESSION } from "../lib/constants";
import { TdChildren } from "../components/ui/TdChildren";
import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { ICON } from "../lib/tailwindcss/icon";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/Button";
import { GoBack } from "../components/layout/GoBack";
import { Header } from "../components/layout/Header";
import { MiniPlayer, keepFocus } from "../components/ui/MiniPlayer";
import { FiPause, FiPlay, FiRepeat } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Table } from "../components/ui/Table";
import { LinkT } from "../components/ui/Link";
import { Text } from "../components/ui/Text";
import { Note } from "../components/ui/Note";
import { Seo } from "../components/layout/Seo";
import { Td } from "../components/ui/Td";
import { Th } from "../components/ui/Th";
import { RAGS } from "../lib/data/rags";
import { Rag } from "../types/rag";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";
import Image from "next/image";

const Rags: NextPage = () => {
  const [rags, setRags] = useState(RAGS);
  // Every rag plays through this one element, which is what lets the volume
  // and speed carry from one rag to the next, and the next start by itself.
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  // The rag itself rather than its id, which is random and not always unique.
  const [current, setCurrent] = useState<Rag | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const shuffleRags = () => {
    const shuffled = [...RAGS];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setRags(shuffled);
  };

  useEffect(() => {
    shuffleRags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Called straight from a click, so the browser counts it as the reader
  // starting playback rather than the page autoplaying.
  const play = (rag: Rag) => {
    if (!audio) return;

    if (rag !== current) {
      audio.src = `${page.rags.path}/${rag.path.composer}/${rag.path.file}.${rag.path.ext}`;
      setCurrent(rag);
    }

    // Rejects if another rag is picked before this one starts, which is fine.
    audio.play().catch(() => {});
  };

  const togglePlay = () => {
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  };

  // Goes through the rags in the order the table shows them, wrapping around
  // at either end.
  const skip = (offset: number) => {
    const index = current ? rags.indexOf(current) : -1;
    play(rags[(index + offset + rags.length) % rags.length]);
  };

  // Like most players: back to the start of the rag, unless it's only just
  // started, in which case back to the one before.
  const previous = () => {
    if (audio && audio.currentTime > 3) audio.currentTime = 0;
    else skip(-1);
  };

  return (
    <>
      <Seo
        title={`${page.rags.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout
        longLayoutFormat={false}
        supportLargeScreen={false}
        showBackButton={true}
      >
        <Animate>
          <Header column={false} singleItem={false}>
            <Heading as="h1" style={{ marginBottom: "0.5rem" }}>
              {page.rags.title}
            </Heading>
          </Header>
          <Text>
            This is a collection of my favorite rags. All these compositions
            were published before the year 1929 so therefore they are all in the{" "}
            <LinkT
              href="https://en.wikipedia.org/wiki/Public_domain"
              target="_blank"
            >
              public domain
            </LinkT>
            .
          </Text>
          <div className="my-4">
            <Note>
              After clicking play, wait a few seconds (1-2 seconds) for the
              audio to start playing. Once it does, press space to pause or
              play, and the left or right arrow key to rewind or skip ahead 5
              seconds.
            </Note>
          </div>
          <div className="flex items-center">
            <Image
              className="rounded-full duration-300 mr-1 border border-teal-100 dark:border-teal-900"
              title="itsRemco's YouTube Profile Picture"
              src="/itsRemco.jpg"
              height={20}
              alt="itsRemco's YouTube Profile Picture"
              width={20}
              quality={100}
            />
            <Text>
              Synthesia audio from <b>itsRemco | Piano</b> on{" "}
              <LinkT
                href="https://www.youtube.com/@itsRemco"
                title="itsRemco | Piano on YouTube"
                target="_blank"
              >
                YouTube
              </LinkT>
              .
            </Text>
          </div>
          <div className="my-4">
            <Note>
              Not every piece here is a rag. Ragtime composers also wrote plenty
              of{" "}
              <LinkT
                href="https://en.wikipedia.org/wiki/March_(music)"
                title="marches"
                target="_blank"
              >
                marches
              </LinkT>{" "}
              and{" "}
              <LinkT
                href="https://en.wikipedia.org/wiki/Waltz"
                title="waltzes"
                target="_blank"
              >
                waltzes
              </LinkT>
              , and a few of those are in here too.
            </Note>
          </div>
          <div className="my-4">
            <Button
              style={{ marginLeft: "auto" }}
              onClick={shuffleRags}
              onMouseDown={keepFocus}
            >
              Shuffle <FiRepeat className={ICON} />
            </Button>
          </div>
          <div className="my-4 w-full">
            <div className="my-4 flex flex-col w-full">
              <Table>
                <thead>
                  <tr>
                    {["Composer", "Title", "Publication", "Audio", "Score"].map(
                      (key) => (
                        <Th key={key} text={key} />
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {rags.map((rag) => {
                    const isCurrent = rag === current;
                    const isRagPlaying = isCurrent && isPlaying;

                    return (
                      <tr
                        key={rag.id}
                        aria-current={isCurrent ? "true" : undefined}
                        className={`duration-300 ${
                          isCurrent ? "bg-teal-50 dark:bg-teal-950/50" : ""
                        }`}
                      >
                        <Td text={rag.composer} center={true} />
                        <Td text={rag.title} center={true} />
                        <Td text={rag.date.toString()} center={true} />
                        <TdChildren>
                          <div className="flex w-full items-center justify-center p-4">
                            <Button
                              onClick={() =>
                                isCurrent ? togglePlay() : play(rag)
                              }
                              onMouseDown={keepFocus}
                              aria-label={`${
                                isRagPlaying ? "Pause" : "Play"
                              } ${rag.title}`}
                              // Wide enough for either label, so the button
                              // doesn't change size as it flips between them.
                              style={{ minWidth: "8rem" }}
                            >
                              {isRagPlaying ? "Pause" : "Play"}
                              {isRagPlaying ? (
                                <FiPause className={ICON} />
                              ) : (
                                <FiPlay className={ICON} />
                              )}
                            </Button>
                          </div>
                        </TdChildren>
                        <TdChildren>
                          <div className="flex w-full justify-center whitespace-nowrap px-4 py-2">
                            <LinkT
                              href={rag.score}
                              title={`${rag.composer} - ${rag.title} Sheet Music`}
                              target="_blank"
                            >
                              [sheet music]
                            </LinkT>
                          </div>
                        </TdChildren>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <GoBack />
        </Animate>
      </Layout>
      <audio
        ref={setAudio}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => skip(1)}
      />
      <MiniPlayer
        audio={audio}
        track={current && { title: current.title, artist: current.composer }}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onPrevious={previous}
        onNext={() => skip(1)}
      />
    </>
  );
};

export default Rags;
