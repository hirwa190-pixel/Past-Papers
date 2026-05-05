import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: #2d6a4f;
`;

const Badge = styled.div`
  background: #b7e4c7;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
`;

const Text = styled.p`
  margin: 10px 0;
`;

const FormBox = styled.div`
  background: #eaeaea;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Form = styled.form`
  width: 50%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background: #95d5b2;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #74c69d;
  }
`;

const ContactInfo = styled.div`
  margin-top: 30px;
`;

const InfoItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Illustration = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

function Contact() {
  return (
    <Container>
      <Header>
        <Title>CONTACT US</Title>
        <Badge>🤏🏽😊 We're here to help!</Badge>
      </Header>

      <Text>Need help? 😊</Text>
      <Text>
        Send us a message and we’ll respond quickly. We’re happy to assist you!
      </Text>

      <FormBox>
        <Form>
          <label>
            <input type="radio" /> Get a Quote
          </label>

          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <TextArea placeholder="Message" />

          <Button>Send Message</Button>
        </Form>

        <Illustration><img src="assets/p.png"></img></Illustration>
      </FormBox>

      <ContactInfo>
        <InfoItem><img src="assets/e.png"></img> pastpapers@yahoo.com</InfoItem>
        <InfoItem><img src="assets/w.png"></img> +250 785 765 902</InfoItem>
        <InfoItem><img src="assets/x.png"></img> @past_papers</InfoItem>
        <InfoItem><img src="assets/t.png"></img> @past_papers</InfoItem>
      </ContactInfo>
    </Container>
  );
}

export default Contact;