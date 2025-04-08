"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Order } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal, Trash2 } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "sonner";
import { useDeleteSingleOrderMutation } from "@/app/apis/_order_index.api";

export const orderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "payStackId",
    header: () => <div className="hidden lg:block">Transaction ID</div>,
    cell: ({ row }) => {
      const payStackId = row.getValue("payStackId");
      return <div className="hidden lg:block">{payStackId as string}</div>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: () => <div className="hidden md:block">Payment Status</div>,
    cell: ({ row }) => {
      const paymentStatus = row.getValue("paymentStatus");
      return <div className="hidden md:block">{paymentStatus as string}</div>;
    },
  },
  {
    accessorKey: "useremail",
    header: () => <div className="">User Email</div>,
    cell: ({ row }) => {
      const email = row.getValue("useremail");
      return <div className="">{email as string}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="hidden lg:block">Date</div>,
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      const formatted = format(new Date(date as string), "yyyy-MM-dd");
      return <div className="hidden lg:block">{formatted}</div>;
    },
  },
  {
    accessorKey: "deliveryStatus",
    header: () => <div className="hidden lg:block">Delivery Status</div>,
    cell: ({ row }) => {
      const deliveryStatus = row.getValue("deliveryStatus");
      return <div className="hidden lg:block">{deliveryStatus as string}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="hidden lg:block">Amount</div>,
    cell: ({ row }) => {
      const amount = row.getValue("amount");
      return <div className="hidden lg:block">{amount as string}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      const [deleteSingleOrder] = useDeleteSingleOrderMutation();
      const handleDelete = async () => {
        await deleteSingleOrder(order.id);
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(order.id);
                toast.success("id copied");
              }}
            >
              <Copy /> <span className="">copy</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Link
                href={`/admin/order/${order.id} `}
                className="flex items-center gap-2"
              >
                <FaRegEdit className=" " />
                <span className="">Edit</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={handleDelete}>
              <Trash2 className="text-gray-700" />{" "}
              <span className="">Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
