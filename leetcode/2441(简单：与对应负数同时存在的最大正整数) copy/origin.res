let cmp: (int, int) => int = (a, b) => b - a

let findMaxK: array<int> => int = (nums: array<int>) => {
  open Js.Array
  let result = nums |> sortInPlaceWith(cmp) |> find(num => Js.Array.includes(-num, nums))
  Js.Option.getWithDefault(-1, result)
}