import MyComponent from "@/components/MyComponent";

const MyPage = ({ myServerContent }: MyPageProps) => {
  return <MyComponent content={myServerContent} />;
};

export const getServerSideProps: GetServerSideProps<MyPageProps> = async () => {
  return {
    props: {
      myServerContent: "Hello from getServerSideProps",
    },
  };
};

export default MyPage;
