import "./apple.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Ads = () => {
  return (
    <>
      <div className="ads-bar">
        <p>
          Get up to 6 months of No Cost EMI* plus up to ₹15000 instant cashback
          on selected products with eligible cards.
          <a href="https://www.apple.com/in/store">
            Shop
            <span>
              <KeyboardArrowRightIcon style={{fontSize: 'medium'}}/>
            </span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Ads;
