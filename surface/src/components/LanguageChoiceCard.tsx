import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function LanguageChoiceCard({
  setLanguage,
}: {
  setLanguage: (value: string) => void;
}) {
  return (
    <RadioGroup
      defaultValue="JavaScript"
      className="max-w-sm"
      onValueChange={(value) => {
        setLanguage(value);
      }}
    >
      <FieldLabel htmlFor="JavaScript">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>JavaScript</FieldTitle>
            <FieldDescription>
              For individuals and small teams.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="JavaScript" id="JavaScript" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="TypeScript">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>TypeScript</FieldTitle>
            <FieldDescription>For growing businesses.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="TypeScript" id="TypeScript" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="Python">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Python</FieldTitle>
            <FieldDescription>
              For large teams and enterprises.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="Python" id="Python" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="C++">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>C++</FieldTitle>
            <FieldDescription>
              For large teams and enterprises.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="C++" id="C++" />
        </Field>
      </FieldLabel>
    </RadioGroup>
  );
}
