import { Radio } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Link from "next/link";

type CustomRadioProps = {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue?: string;
  value: string;
};

export default function CustomRadio({
  handleChange,
  selectedValue,
  value,
}: CustomRadioProps) {
  return (
    <Link href="/payment-pix">
      <Radio
        sx={{
          "& .MuiSvgIcon-root": {
            color: "rgba(229, 229, 229, 1)",
            width: "26px",
            height: "26px",
          },
          "&.Mui-checked .MuiSvgIcon-root": {
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(3, 214, 157, 1)",
            borderRadius: "50%",
          },
        }}
        checkedIcon={<CheckOutlinedIcon fontSize="small" />}
        className="border-neutral-200"
        checked={selectedValue === value}
        onChange={handleChange}
        value={value}
        name="radio-buttons"
        inputProps={{ "aria-label": value }}
      />
    </Link>
  );
}
