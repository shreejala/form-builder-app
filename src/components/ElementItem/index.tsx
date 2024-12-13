import { FormFieldType, FormFieldUpdateType } from "@/types/formFIeld";
import { TextInput } from "../molecules/TextInput";
import { FormButton, IconButton, SelectInput } from "../molecules";
import { Plus, X } from "lucide-react";
import { inputType } from "@/constants/fields";

interface ElementItemProps {
  item: FormFieldType;
  updateItem: (id: number, data: FormFieldUpdateType) => void;
  onRemoveField: () => void;
}

const ElementItem = ({ item, updateItem, onRemoveField }: ElementItemProps) => {
  const handleRemoveOptions = (option: string) => {
    if (item?.options && item?.options?.length > 0) {
      const foundIndex = item?.options?.indexOf(option);

      if (foundIndex > -1) {
        const prevOptions = [...(item?.options || [])];
        prevOptions.splice(foundIndex, 1);

        updateItem(item.id, {
          options: prevOptions,
        });
      }
    }
  };

  const handleRemoveRadioOptions = (option: string) => {
    if (item?.radioOptions && item?.radioOptions?.length > 0) {
      const foundIndex = item?.radioOptions?.indexOf(option);

      if (foundIndex > -1) {
        const prevOptions = [...(item?.radioOptions || [])];
        prevOptions.splice(foundIndex, 1);

        updateItem(item.id, {
          radioOptions: prevOptions,
        });
      }
    }
  };

  return (
    <div
      key={item.id}
      className="flex flex-col gap-2 p-4 rounded-md shadow-md bg-secondary-foreground"
    >
      <div className="flex flex-row items-center justify-between">
        <span className=" font-bold">{item.name}</span>

        <FormButton
          className="text-white"
          title={"X"}
          size="icon"
          variant="link"
          onClick={onRemoveField}
        />
      </div>

      {item.type === "text" && (
        <SelectInput
          options={inputType}
          placeholder="Select Type"
          handleChange={(val: string) =>
            updateItem(item.id, {
              formFieldType: val,
            })
          }
        />
      )}

      <div className="flex flex-row my-2">
        <TextInput
          type="text"
          placeholder="label"
          value={item.label}
          onChange={(e) =>
            updateItem(item.id, {
              label: e.target.value,
            })
          }
          onBlur={(e) =>
            updateItem(item.id, {
              formFieldName: e.target.value,
            })
          }
          className="bg-white  text-black border-black px-[4px] py-[2px] placeholder-gray-500"
        />
      </div>

      {item.type === "select" && (
        <>
          <div className="flex flex-row justify-between mt-2">
            <div className="flex flex-1">Options </div>

            <IconButton
              onClick={() => {
                updateItem(item.id, {
                  options: [...(item?.options || []), "New Option"],
                });
              }}
            >
              <Plus />
            </IconButton>
          </div>

          {item?.options?.map((option, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center gap-3 mt-2"
            >
              <TextInput
                type="text"
                value={option}
                onChange={(e) =>
                  updateItem(item.id, {
                    options: item?.options?.map((opt, i) =>
                      i === index ? e.target.value : opt
                    ),
                  })
                }
                className="bg-white  text-black border-black px-[4px] py-[2px] placeholder-gray-500"
                placeholder={"Option"}
              />

              <IconButton
                variant="destructive"
                onClick={() => handleRemoveOptions(option)}
              >
                <X />
              </IconButton>
            </div>
          ))}
        </>
      )}

      {item.type === "radio" && (
        <>
          <div className="flex flex-row justify-between mt-2">
            <div className="flex flex-1">Options </div>

            <IconButton
              onClick={() => {
                console.log("clicked");
                updateItem(item.id, {
                  radioOptions: [...(item?.radioOptions || []), "New Option"],
                });
              }}
            >
              <Plus />
            </IconButton>
          </div>

          {item?.radioOptions?.map((option, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center gap-3 mt-2"
            >
              <TextInput
                type="text"
                value={option}
                onChange={(e) =>
                  updateItem(item.id, {
                    radioOptions: item?.radioOptions?.map((opt, i) =>
                      i === index ? e.target.value : opt
                    ),
                  })
                }
                className="bg-white  text-black border-black px-[4px] py-[2px] placeholder-gray-500"
                placeholder={"Option"}
              />

              <IconButton
                variant="destructive"
                onClick={() => handleRemoveRadioOptions(option)}
              >
                <X />
              </IconButton>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ElementItem;
