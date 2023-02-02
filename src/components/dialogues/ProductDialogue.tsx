import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";
import { database } from "../../configs";
import { normalMailBody } from "../../helper/MailTemplate";

interface Props {
  open: boolean;
  handleClose: any;
  product: (value: number) => void;
}

const ProductDialogue: React.FC<any> = ({
  open,
  handleClose,
  product,
}: Props) => {
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", message: "" },
    validationSchema: yup.object({
      name: yup.string().required(`Name is Required!`),
      email: yup
        .string()
        .required("Email is Required!")
        .email("Enter valid email!"),
      phone: yup.string().min(6).max(15).required("Phone no is required!"),
      message: yup.string().required(`Required Field!`),
    }),
    onSubmit: async (values) => {
      await database.ref("product-enquiry").push({
        timestamp: new Date().toString(),
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        product: product,
      });
      await database.ref("notifications").push({
        timestamp: new Date().toString(),
        name: values?.name,
        description: "For Product Enquiry.",
        email: values.email,
        phone: values.phone,
        from: "Products",
        isRead: false,
        message: values.message,
      });
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "info@truyaltyventures.com",
          subject: "New Service Enquiry",
          html: normalMailBody(
            "You have received a new service enquiry. Kindly check your panel for details."
          ),
        }),
      });
      // console.log(res);
      Swal.fire("Success!", "Form submitted successfully!", "success");
      formik.resetForm();
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <div className="md:w-[30rem] w-[72vw] md:px-4 px-2 tracking-wide">
            <p className="pb-1 font-semibold">Name</p>
            <TextField
              size="small"
              className="w-full"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <p className="pb-1 mt-4 font-semibold">Email</p>
            <TextField
              size="small"
              className="w-full"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <p className="pb-1 mt-4 font-semibold">Phone</p>
            <TextField
              size="small"
              className="w-full"
              placeholder="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <p className="pb-1 mt-4 font-semibold">Message</p>
            <TextField
              multiline
              rows={4}
              size="small"
              className="w-full"
              placeholder="Message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </div>
          <div className="flex justify-center py-4 mt-4">
            <button
              type="submit"
              className="text-white text-sm bg-theme rounded-full px-8 font-semibold hover:bg-gradient-to-r transition-all ease-in-out duration-200 shadow-md from-blue-500 to-blue-300 py-3"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialogue;
