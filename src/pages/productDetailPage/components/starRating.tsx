// import { Box, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Typography } from "@mui/material";
const RandomStarRating = () => {
  const randomRating = Math.random() * 5;

  const filledStars = Math.floor(randomRating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, index) => (
        <Typography key={index} color="orange">
          {<StarRateIcon />}
        </Typography>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <Typography key={index} color="disable">
          {<StarBorderIcon />}
        </Typography>
      ))}
    </div>
  );
};

export default RandomStarRating;
