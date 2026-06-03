import * as React from "react";

export type ContainerProps<T extends React.ElementType = "div"> = React.PropsWithChildren<{
  as?: T;
  className?: string;
}> & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const Container = React.forwardRef(
  <T extends React.ElementType = "div">(
    { as, className, children, ...props }: ContainerProps<T>,
    ref: React.Ref<React.ElementRef<T>>
  ) => {
    const Component = as || ("div" as T);
    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export default Container;
