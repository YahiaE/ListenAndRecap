interface Props {
  data: string;
}

function MediaPlayer({ data }: Props) {
  return (
    <iframe
      width="420"
      height="315"
      src={data ? "https://www.youtube.com/embed/" + data : ""}
    ></iframe>
  );
}

export default MediaPlayer;
