import { FileUploadDropzone, FileUploadList, FileUploadRoot } from "@/components/ui/file-upload";
import MainLayout from "@/layouts/layoutPadrao";
import { Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import axios from "@/utils/axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpLoad = () => {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      toast.error("Por favor, selecione um arquivo para upload.");
      return;
    }

    const formData = new FormData();
    console.log(formData)
    formData.append("file", file);

    try {
      const response = await axios.post("/predict/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        toast.success("Arquivo carregado com sucesso!");
      } else {
        toast.error("Erro ao fazer upload do arquivo.");
      }
    } catch (error) {
      toast.error("Erro ao enviar o arquivo.");
    }
  };

  const handleDrop = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <MainLayout>
      <Center>
        <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10}>
          <FileUploadDropzone
            type="file"
            name="sampleFile"
            label="Drag and drop here to upload"
            description=".png, .jpg, .doc, .docx, .pdf up to 5MB"
            onDrop={handleDrop}
            onChange = {handleDrop}
            accept=".png, .jpg, .doc, .docx, .pdf"
          />
          <FileUploadList file={file} showSize clearable />
          <Button bgColor="red" onClick={uploadFile}>Upload</Button>
        </FileUploadRoot>
      </Center>

      <ToastContainer />
    </MainLayout>
  );
};

export default UpLoad;





