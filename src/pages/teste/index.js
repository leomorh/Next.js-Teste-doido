import Login from "@/components/login";
import Imagem from "@/components/image";
import MainLayout from "@/layouts/layoutPadrao";
import { HStack } from "@chakra-ui/react";


export default function CardWithForm(){

  const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
  
    const goPage = () => {
      router.push('/')
    }

    const goCadastro = () => {
      router.push('teste/cadastro')
    }
  
    const [data, setData] = useState('');
  

    const handleClick = async () => {
      try {
        
         const Usuario = await axios.post(`/user/login`, {
           username: username,
           password: password
        })
        localStorage.setItem('token', Usuario.token)
        setData(Usuario.username)
        router.push('/')
      } catch (error) {
        console.log(error.message);
        
      }
  }
  
return (
  <MainLayout>
  <HStack>
  <Imagem></Imagem>
  <Login></Login>
  </HStack>
  </MainLayout>
);
}
