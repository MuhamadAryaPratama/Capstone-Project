import SumateraUtaraMenu from "../models/SumateraUtaraModel.js";

export const createSumateraUtaraMenu = async (req, res) => {
  const { name, description, restaurant_name, google_maps_link, rating } =
    req.body;

  if (
    !name ||
    !description ||
    !restaurant_name ||
    !google_maps_link ||
    rating == null
  ) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    const newMenu = await SumateraUtaraMenu.create({
      name,
      description,
      restaurant_name,
      google_maps_link,
      rating,
    });
    res.status(201).json(newMenu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to create menu item" });
  }
};

export const getSumateraUtaraMenu = async (req, res) => {
  try {
    const menus = await SumateraUtaraMenu.findAll();
    res.json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to retrieve menu items" });
  }
};

export const deleteSumateraUtaraMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await SumateraUtaraMenu.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({ msg: "Menu item not found" });
    }

    res.status(200).json({ msg: "Menu item deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to delete menu item" });
  }
};
