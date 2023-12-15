import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const DeliveryTo = () => {
  return (
    <div className="hidden md:flex items-center link hover:border hover:border-white hover:p-1 hover:box-border">
      <LocationOnOutlinedIcon className="h-5 mt-3" />
      <div className="ml-1">
        <p className="text-xs text-slate-300">Deliver to</p>
        <p className="font-bold text-sm">Georgia</p>
      </div>
    </div>
  );
};

export default DeliveryTo;
