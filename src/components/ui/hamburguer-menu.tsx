interface IProps {
  checked: boolean;
  onChange: () => void;
}
export const HamburguerMenu = ({ checked, onChange }: IProps) => {
  return (
    <>
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        id="burguer"
      />
      <label htmlFor="burguer" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </>
  );
};
