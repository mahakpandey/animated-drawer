import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "./Button";

const MenuItem = ({
  value,
  handleNext,
}: {
  value: any;
  handleNext: (id: string) => void;
}) => {
  const MenuIcon = value.icon;

  return (
    <Button
      key={value.id}
      className="w-full flex justify-between cursor-pointer rounded-2xl sm:px-4 px-3 sm:py-3 py-2 border-gray-100 border-2 active:bg-gray-200"
      onClick={() => value.children?.length > 0 && handleNext(value.id)}
      aria-label={value.title}
    >
      <div className="flex gap-4 items-center ">
        <div className="p-1 rounded-xl shrink-0">
          <MenuIcon className="h-5 w-5 text-black/80 transition-colors" />
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-sm font-medium leading-tight text-gray-900">
            {value.title}
          </p>
          <p className=" text-xs text-gray-500">
            {value.desc} ({value.children?.length || 0})
          </p>
        </div>
      </div>

      {value.children?.length > 0 && (
        <div className="flex items-center" aria-label="Navigate to submenu">
          <ChevronRightIcon sx={{ width: "20px", height: "20px" }} />
        </div>
      )}
    </Button>
  );
};

export default MenuItem;
