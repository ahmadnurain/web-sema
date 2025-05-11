const Rating = ({ name, value, onChange }) => {
  const getRatingColor = (val) => {
    if (val < 20) return 'bg-red-500';
    if (val < 40) return 'bg-orange-400';
    if (val < 60) return 'bg-yellow-400';
    if (val < 80) return 'bg-lime-400';
    return 'bg-green-500';
  };

  const getRatingLabel = (val) => {
    if (val < 20) return "Tidak Puas";
    if (val < 40) return "Kurang Puas";
    if (val < 60) return "Cukup Puas";
    if (val < 80) return "Puas";
    return "Sangat Puas";
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1 text-sm">
        <span className="font-medium text-white">
          {getRatingLabel(value)}
        </span>
        <span className="font-bold text-white">{value}%</span>
      </div>
      
      <input
        type="range"
        name={name}
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className={`w-full h-2 rounded-full appearance-none cursor-pointer ${getRatingColor(value)}`}
        style={{
          backgroundSize: `${value}% 100%`
        }}
      />
      
      <div className="flex justify-between text-xs text-gray-300 mt-1">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default Rating;