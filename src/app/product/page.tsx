import {
  AlertDialog,
  AlertDialogAction,
  //   AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



  
export default function Page() {
  return (
    <>
      <section>
        <AlertDialog>
          <AlertDialogTrigger>open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>nombre del color</AlertDialogTitle>
              <AlertDialogDescription>
                <article>
                  <div className="bg-blue-400 w-22 h-22 inline-block">
                    <div>
                      <div>
                      </div>
                    </div>
                  </div>
                </article>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </>
  )
}
