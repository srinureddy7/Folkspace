import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";

interface Props {
  open: boolean;
  handleClose: any;
  activeData: any;
}

const NotificationDialogue = ({ open, handleClose, activeData }: Props) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        id="customized-dialog-title"
        sx={{ p: 2, minWidth: "18rem !important" }}
      >
        <p className="text-center text-md font-bold text-theme te tracking-wide">
          NOTIFICATION
        </p>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            top: 10,
            right: 10,
            position: "absolute",
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Tooltip title="Close">
            <Close />
          </Tooltip>
        </IconButton>
      </DialogTitle>
      <DialogContent className="app-scrollbar" sx={{ p: 2 }}>
        <div className="md:w-[25rem] w-[72vw] md:px-4 px-2 tracking-wide flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <p className="font-semibold w-1/2">Name :</p>
            <p className="w-1/2">{activeData?.name}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold w-1/2">Email :</p>
            <p className="w-1/2">{activeData?.email}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold w-1/2">Phone :</p>
            <p className="w-1/2">{activeData?.phone}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold w-1/2">From :</p>
            <p className="w-1/2">{activeData?.from}</p>
          </div>
          <div className="flex justify-between flex-col pb-8">
            <p className="font-semibold w-1/2">Message :</p>
            <p className="w-full pt-2">{activeData?.message}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationDialogue;
