class AddLikedToPaintings < ActiveRecord::Migration[5.1]
  def change
    add_column :paintings, :liked, :boolean, :default => false
  end
end
