import { Button } from "./ui/button";

export default function CVButton() {
  return (
    <a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="icon">CV</Button>
    </a>
  );
}
