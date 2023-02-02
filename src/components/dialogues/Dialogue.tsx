import { Article, Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import Swal from "sweetalert2";

interface Props {
  open: boolean;
  handleClose: any;
}

const Dialogue = ({ open, handleClose }: Props) => {
  const handleSubmit = () => {
    Swal.fire(`Success`,`Form submitted successfully!`,`success`)
  }
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
        <p className="text-center text-xl font-bold pt-6 text-theme tracking-wide">
          APPLY NOW
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
        <div className="md:w-[30rem] w-[72vw] md:px-4 px-2 tracking-wide">
          <p className="pb-1 font-semibold">Name</p>
          <TextField size="small" className="w-full" placeholder="Name" />
          <p className="pb-1 mt-4 font-semibold">Email</p>
          <TextField size="small" className="w-full" placeholder="Email" />
          <p className="pb-1 mt-4 font-semibold">Phone</p>
          <TextField size="small" className="w-full" placeholder="Phone" />
          <p className="pb-1 mt-4 font-semibold">Message</p>
          <TextField
            multiline
            rows={4}
            size="small"
            className="w-full"
            placeholder="Message"
          />
        </div>
        <div className="flex justify-center py-4 mt-4">
          <button onClick={handleSubmit} className="text-white text-sm bg-theme rounded-full px-8 font-semibold hover:bg-gradient-to-r transition-all ease-in-out duration-200 shadow-md from-blue-500 to-blue-300 py-3">
            SUBMIT
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Dialogue;
