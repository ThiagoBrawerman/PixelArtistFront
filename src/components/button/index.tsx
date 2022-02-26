type MainButtonProps = {
  text: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function MainButton(props: MainButtonProps) {
  return (
    <>
      <label htmlFor="main-button">{props.text}</label>
      <button id="main-button" onClick={props.clickHandler} />
    </>
  );
}
