import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload,Wand2 } from 'lucide-react'
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select,SelectTrigger,SelectValue,SelectItem,SelectContent } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App(){ 
   return ( 
      <div className="min-h-screen flex flex-col">
         <div className="px-6 flex py-2 items-center justify-between border-b">
           <h1 className="text-xl font-bold">upload.ai</h1>
           <div className="flex gap-3 items-center">
            <span className="text-sm text-zinc-400 text-muted-foreground">Desenvolvido por ciro costa </span>


            <Separator orientation='vertical' className="h-6"/>
             <Button>
              <Github className="w-4 h-4 mr-3"/>
              GitHub
              </Button>
           </div>
         </div>

         <main className="flex-1 p-6 flex gap-6">
           <section className="flex flex-col flex-1 gap-4">
             <div className="grid grid-rows-2 gap-4 flex-1">
               <Textarea className="resize-none leading-relaxed" placeholder="inclua o prompt para a ia..."/>
               <Textarea className="resize-none leading-relaxed" placeholder="resultado gerado pela IA" readOnly/>
             </div>
             <p className="text-sm text-muted-foreground">Lembre-se:você pode utilizar a variavel <code className="text-violet-400">{'{transcription}'}</code>  no seu prompt para adicionar o conteudo da transquição selecionado</p>
           </section>
           <aside className="w-80 space-y-6">
                  <form className="space-y-6">
                       <label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 justify-center items-center hover:bg-primary/5">
                       <FileVideo/>

                        Selecione um video
                        
                        </label>

                        
                       <input type="file" id="video" accept="video/mp4" className="sr-only"/>

                        <Separator/>

                        <div className="space-y-1">
                           <Label htmlFor="transcription-prompt">Prompt de transcrição</Label>
                           <Textarea id="transcription-prompt" className="min-h-20 leading-relaxed resize-none" placeholder="inclua palavras-chave mencionadas separadas por virgula"></Textarea>
                        </div>
                        <Button type="submit" className="bg-violet-600 text-stone-100 w-full space-y-6">Carregar Video
                         <Upload className="w-4 h-4 ml-2"/>
                        </Button>

                       
                       
                  </form>


                  <Separator />



                  <form className="space-y-8"> 
                  <div className="space-y-2">
                             <label>Prompt</label>
                             <Select>
                                <SelectTrigger>
                                   <SelectValue placeholder="selecione um prompt..."/>
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="title">Titulo do youtube</SelectItem>
                                <SelectItem value="description">Descrição do youtube</SelectItem>
                                </SelectContent>
                             </Select>
                         <span className="block text-sm text-muted-foreground italic">Voce podera customizar essa opçao em breve</span>
                       </div>


                       <div className="space-y-2">
                             <label>Modelo</label>
                             <Select disabled defaultValue="gpt3.5">
                                <SelectTrigger>
                                   <SelectValue/>
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="gpt3.5">Gpt 3.5-turbo 16</SelectItem>
                                </SelectContent>
                             </Select>
                         <span className="block text-sm text-muted-foreground italic">Voce podera customizar essa opçao em breve</span>
                       </div>

                       <Separator/>

                       <div className="space-y-4">
                             <label>Temperatura</label>
                             <Slider min={0} max={1} step={0.1}/>
                         <span className="block text-sm text-muted-foreground italic">Valores mais altos tendem a deixar o resultado mais criativo e com possiveis erros</span>
                       </div>
                       <Separator/>
                       <Button type="submit" className="w-full">
                        <Wand2 className="w-4 mr-2 h-4"/>
                             Executar
                       </Button>
                  </form>
           </aside>
        
         </main>


      </div>
   )
}