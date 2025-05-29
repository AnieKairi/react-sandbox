import { AlertDialog, Flex, Button } from "@radix-ui/themes";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

type Props = {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  cancelText?: string;
  confirmText?: string;
};

export default function CreateEmailDialog({
  title,
  description,
  onConfirm,
  onCancel,
  cancelText = "No, cancel",
  confirmText = "Yes, remove",
}: Props) {
    return (
    <AlertDialog.Root open={true}>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2" style={{ whiteSpace: "pre-wrap" }}>
          {description}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button className="primary-button" onClick={onCancel}>
              {cancelText}
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button className="bg-red-600" onClick={onConfirm}>
              {confirmText}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
    )
}
