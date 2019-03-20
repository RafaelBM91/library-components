# Switch

<!-- STORY -->

## Usage

```
    <>
        <Switch
            update={(checked) => console.log(checked)}
        />
        <Switch
            size={1.2}
            update={(checked) => console.log(checked)}
        />
    </>
```

## Props

### `size: number`
Tamaño proporcional, ej. `size={1}`
### `update: function`
Callback cambio de estado, la entrada pued ser `true` o `false`
### `colorGround: string`
Color de fondo
### `colorSpinet: string`
Color del indicador cuando esta en `false`
### `colorSpinetActive: string`
Color del indicador cuando esta en `true`
