import clsx from "clsx";

type DrawerTypes = {
  isOpen: boolean;
  onClose: ()=>void;
}

const AppDrawer = ({ isOpen = true, onClose }:DrawerTypes) => {
  return (
    <div
      className={clsx(
        "w-0 fixed h-full inset-0 bg-gray-300  overflow-x-hidden transition pt-12 z-[1000]",
        {
          "w-64": isOpen,
        }
      )}
    >
      <button onClick={onClose} className="close-button">
        Close
      </button>
      {/* Add your sidebar content here */}
    </div>
  );
};

export default AppDrawer;
