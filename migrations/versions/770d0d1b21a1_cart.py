"""'Cart'

Revision ID: 770d0d1b21a1
Revises: 03213e8d65c6
Create Date: 2022-06-07 14:45:12.344498

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '770d0d1b21a1'
down_revision = '03213e8d65c6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.String(length=32), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cart')
    # ### end Alembic commands ###
