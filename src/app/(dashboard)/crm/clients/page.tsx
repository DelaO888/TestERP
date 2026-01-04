import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ClientsTable} from "@/features/crm/clients/ClientsTable";
import {CreateClientDialog} from "@/features/crm/clients/CreateClientDialog";

export default function ClientsPage(){
    return(
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Clientes</h1>
                <CreateClientDialog/>
            </div>

            
        <Card>
            <CardHeader>
                <CardTitle>Lista de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
                <ClientsTable/>
            </CardContent>
        </Card>
        </div>


    )
}