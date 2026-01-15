"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateClientDialog(){
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        name: "",
        rfc: "",
        email: "",
        phone: ""
    })
    const [saving, setSaving] = useState(false);

    async function onSubmit(e: React.FormEvent){
        e.preventDefault();
        setSaving(true);
        const res = await fetch("/api/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: form.name,
                rfc: form.rfc || undefined,
                email: form.email || undefined,
                phone: form.phone || undefined,
            })
        })

        setSaving(false);
        if(res.ok){
            setOpen(false);
            window.location.reload();
        } else {
            const err = await res.json();
            alert("Error: " + err.error);
        }


    }


    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button>Crear Nuevo Cliente</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Crear Cliente</DialogTitle>
                </DialogHeader>


<form className="space-y-3" onSubmit={onSubmit}>
    <div className="space-y-1">
        <Label>Nombre</Label>
        <Input
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            ></Input>
    </div>
    <div className="space-y-1">
        <Label>RFC</Label>
        <Input
            value={form.rfc}
            onChange={(e) => setForm({...form, rfc: e.target.value})}
            ></Input>
    </div>
     <div className="space-y-1">
        <Label>Email</Label>
        <Input
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
            ></Input>
    </div>
     <div className="space-y-1">
        <Label>Telefono</Label>
        <Input
            value={form.phone}
            onChange={(e) => setForm({...form, phone: e.target.value})}
            ></Input>
    </div>
    <Button type="submit" disabled={saving}>
        {saving ? "Guardando..." : "Guardar"}
    </Button>
</form>


            </DialogContent>
        </Dialog>
    )

}