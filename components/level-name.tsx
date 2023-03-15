type LevelNameProps = {
  level: 1 | 2 | 3;
};

const LevelName: React.FC<LevelNameProps> = ({ level }) => {
  switch (level) {
    case 1:
      return <span>Sprout</span>;
    case 2:
      return <span>Plant</span>;
    case 3:
      return <span>Carnivore plant</span>;
  }
};

export default LevelName;
