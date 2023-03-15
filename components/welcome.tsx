import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-12">
      <h1 className="font-bold sm:text-6xl text-4xl leading-none text-center tracking-tight">
        Welcome to&nbsp;
        <span
          className="!bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(73.59deg, #5F58E4 42.64%, #787CE4 54%, #787CE4 77.46%)",
          }}
        >
          Plant Attack
        </span>
      </h1>
      <div className="mx-auto">
        <Image
          src="/cat-attack.png"
          width={400}
          height={320}
          alt="Plant Attack"
        />
      </div>
      <div className="max-w-xs">
        <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Welcome;
