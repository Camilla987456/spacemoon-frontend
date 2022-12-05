import { ReactElement } from "react";

interface IProps {
  children: ReactElement | ReactElement[];
}

const Wrapper = ({ children }: IProps) => {
  return (
    <>
      <div
        style={{
          height: "100%",
          marginTop: "60px",
          marginBottom: "40px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
