import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Main = styled.div`
  flex-grow: 1;
`;

export const Spaces: React.FC<{ size: number }> = (props) => {
  const Space = () => <>&nbsp;</>;
  if (props.size)
    return (
      <>
        {Array.from(Array(props.size)).map((x, i) => (
          <Space key={`space_${i}`} />
        ))}
      </>
    );
  return <>&nbsp;</>;
};
