import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

const renderStars = (initial = 0, total = 5) => {
    const filled = initial;
    const outline = total - filled;

    const filledStars = Array(filled).fill().map((el, i) => <TiStarFullOutline key={`filled-${i}`} />);
    const outlineStars = Array(outline).fill().map((el, i) => < TiStarOutline key={`outline-${i}`} />);

    return [...filledStars, ...outlineStars];
}

export default renderStars;