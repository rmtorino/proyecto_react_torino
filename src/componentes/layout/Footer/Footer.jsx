import { Typography } from "@mui/material";
import "./Footer.css";
const Footer = ({ items }) => {
  return (
    <div>
      <div className="footer">
        {items.map((item) => {
          return (
            <div className="card_footer" key={item.id}>
              <img src={item.img} alt="" />
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="footer_2"></div>
      <div className="footer_3">
        <h1>RICARDO TORINO</h1>
      </div>
    </div>
  );
};

export default Footer;
