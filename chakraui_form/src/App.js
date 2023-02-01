import {
  Box,
  Heading,
  VStack,
  Text,
  Center,
  Card,
  
  CardBody,
  
  FormControl,
  FormLabel,
  
  Input,
  Button,
  HStack,
  Link,
  Stack
} from '@chakra-ui/react'
import { Logo } from "./Logo";
import React,{useState} from "react";
import './App.css';

function App() {

  const [email,setEmail] =useState("");
  const [pwd,setPwd]=useState("");
  const [list,setList]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && pwd)
    {
      const newItem={
        id:Math.random(),
        email,
        pwd
      }
      setList([...list,newItem]);
      setEmail("");
      setPwd("");
    }
  }
  return (
    <Box>
      <Center>
        <Stack spacing="4">

              <VStack as="header" mt="8">
        <Logo />

        <Heading as="h1" color="#24292F" fontWeight="300" fontSize="24px" letterSpacing="-0.5px">Sign in to GitHub</Heading>
      </VStack>
      

      <Card  variant="outline" mt="8" bg="#F6F8FA" maxW="308px" borderColor="#d8dee4">
        <CardBody>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            
          <FormControl>
            <FormLabel size="sm" color="#24292F" fontWeight="600" fontSize="14px">Username or email address</FormLabel>
            <Input type='email' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            size="sm" bg="#fff" border="1px solid #d0d7de" borderRadius="6px"/>
            </FormControl>
            <FormControl>
            <HStack justify="space-between">
            <FormLabel size="sm" color="#24292F" fontWeight="600" fontSize="14px">Password</FormLabel>
          <Button as="a" href="#" variant="link" color="#0969DA" fontSize="12px" fontWeight="500">Forgot Password?</Button>
            </HStack>
             <Input type='password' 
             value={pwd}
             onChange={(e)=>setPwd(e.target.value)}
             size="sm" bg="#fff" border="1px solid #d0d7de" borderRadius="6px" />
             </FormControl>
            <Button 
             size='sm'
             bg="#2DA44E"
             color="#fff"
             _hover={{bg:"#2c974b"}}
            type="submit"
            >Sign in</Button>
          
          </Stack>
          </form>
        </CardBody>
      </Card>
      
    
      <Card variant="outline" borderColor="#d0d7de" mt="8">
        <CardBody>
          <Center>
          <HStack spacing="1" fontSize="sm">
          <Text color="#24292F">New to GitHub?</Text>
          <Link color="#0969DA">Create an account.</Link>
          </HStack>
          </Center>
        </CardBody>
      </Card>
      
      </Stack>
      </Center>

    </Box>
  );
}

export default App;
