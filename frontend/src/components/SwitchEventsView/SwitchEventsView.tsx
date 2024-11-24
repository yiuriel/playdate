import { setListView, setMapView } from "../../features/events/events.slice";
import { useAppDispatch } from "../../redux/hooks";
import { Button } from "../Button/Button";
import { ListBulletIcon, MapIcon } from "@heroicons/react/20/solid";

export const SwitchEventsView = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-2 mt-2">
      <Button
        size="small"
        variant="primary"
        onClick={() => dispatch(setListView())}
      >
        <ListBulletIcon className="size-6" />
        List
      </Button>
      <Button
        size="small"
        variant="secondary"
        onClick={() => dispatch(setMapView())}
      >
        <MapIcon className="size-6" />
        Map
      </Button>
    </div>
  );
};
