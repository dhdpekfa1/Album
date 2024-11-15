interface IconWithTextProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ Icon, text }) => {
  return (
    <div className="flex items-center">
      <Icon className="w-4 h-4 mt-[2px] mr-4" />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export { IconWithText };
