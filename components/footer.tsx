import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 w-full max-w-xs justify-center">
        <a
          href="https://bridge.base.org/"
          target="_blank"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
          rel="noreferrer"
        >
          <Image src="/icons/zap.svg" width={12} height={12} alt="Zap" />
          <span>Bridge to Base Goerli</span>
        </a>
        <a
          href="https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
        >
          <Image src="/icons/zap.svg" width={12} height={12} alt="Zap" />
          <span>Get Base Goerli funds</span>
        </a>
      </div>
    </>
  );
};

export default Footer;
